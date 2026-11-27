import { createHash, createPublicKey, verify } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const readJson = async file => JSON.parse(await readFile(new URL(file, import.meta.url), 'utf8'));
const [sample, trustedKey] = await Promise.all([
  readJson('./sample/review-packet.json'),
  readJson('./sample/sample-public-key.json')
]);

function canonicalize(value) {
  if (Array.isArray(value)) return '[' + value.map(canonicalize).join(',') + ']';
  if (value && typeof value === 'object') {
    const fields = Object.keys(value).sort().map(key => JSON.stringify(key) + ':' + canonicalize(value[key]));
    return '{' + fields.join(',') + '}';
  }
  return JSON.stringify(value);
}

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const { document, signature } = sample;
const payload = Buffer.from(canonicalize(document));
const key = createPublicKey({ key: trustedKey, format: 'jwk' });
const valid = signature.algorithm === 'Ed25519' &&
  signature.canonicalization === 'agentcaliper-ordered-json-v1' &&
  signature.keyId === sha256(canonicalize(trustedKey)) &&
  signature.sha256 === sha256(payload) &&
  verify(null, payload, key, Buffer.from(signature.value, 'base64url'));

if (!valid) throw new Error('The example packet failed signature verification.');
console.log('The sample packet verifies against the published demo key.');
