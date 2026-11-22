# Twin API

The serverless backend for the "Ask my AI twin" chat on jonnyrosero.com. It's a port of the Gradio twin from
`agents2/1_foundations/twin` (same prompt idea, same two tools) and runs as one Vercel Function with no dependencies.

- `api/chat.js`: `POST /api/chat` with `{ message, history }` returns `{ reply }`. It checks the request origin, caps
  message and history length, limits tokens and tool rounds, and sends a Pushover notification for leads and for
  questions it couldn't answer.
- `lib/context.js`: what the twin knows, generated from `summary.txt`, the résumé and `src/data/projects.ts`.
  Regenerate it when those change.
- `dev-server.mjs`: local test server on port 3001.

## Environment variables

| Name | Required | Notes |
| --- | --- | --- |
| `OPENAI_API_KEY` | yes | OpenAI key, or an OpenRouter key if `OPENAI_BASE_URL` is set |
| `OPENAI_BASE_URL` | no | defaults to `https://api.openai.com/v1`; for OpenRouter use `https://openrouter.ai/api/v1` |
| `TWIN_MODEL` | no | defaults to `gpt-5.4-mini` (`openai/gpt-5.4-mini` on OpenRouter) |
| `PUSHOVER_USER`, `PUSHOVER_TOKEN` | no | phone notifications for leads and unanswered questions |
| `ALLOWED_ORIGINS` | no | comma-separated; defaults to jonnyrosero.com plus localhost |

## Deploy

```bash
cd twin-api
vercel link            # create/link a project, e.g. "jonnyrosero-twin"
vercel env add OPENAI_API_KEY production
vercel --prod
```

Then build the site with `NEXT_PUBLIC_TWIN_API_URL=https://<project>.vercel.app/api/chat`. The chat widget stays
hidden whenever that variable is missing.
