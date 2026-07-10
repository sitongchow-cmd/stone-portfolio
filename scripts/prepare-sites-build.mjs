import { mkdir, readFile, copyFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = process.cwd()
const distDir = resolve(root, 'dist')
const serverDir = resolve(distDir, 'server')
const distOpenAiDir = resolve(distDir, '.openai')

const indexHtml = await readFile(resolve(distDir, 'index.html'), 'utf8')

await mkdir(serverDir, { recursive: true })
await mkdir(distOpenAiDir, { recursive: true })
await copyFile(resolve(root, '.openai', 'hosting.json'), resolve(distOpenAiDir, 'hosting.json'))

const serverSource = `const INDEX_HTML = ${JSON.stringify(indexHtml)};

function withIndexFallback(request, response, env) {
  if (response.status !== 404) return response;

  const accept = request.headers.get('accept') || '';
  if (!accept.includes('text/html')) return response;

  const indexUrl = new URL('/index.html', request.url);
  return fetchAsset(new Request(indexUrl, request), env);
}

async function fetchAsset(request, env) {
  if (env?.ASSETS?.fetch) {
    const response = await env.ASSETS.fetch(request);
    return withIndexFallback(request, response, env);
  }

  return new Response(INDEX_HTML, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-cache',
    },
  });
}

export default {
  fetch(request, env) {
    return fetchAsset(request, env);
  },
};
`

await writeFile(resolve(serverDir, 'index.js'), serverSource)
