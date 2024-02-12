FROM node:20-bookworm-slim AS base

FROM base AS builder

WORKDIR /workspace/next_app

RUN apt-get update && apt-get upgrade -y
COPY next_app/package.json next_app/yarn.lock* ./

COPY next_app/src ./src
COPY next_app/public ./public
COPY next_app/* ./

RUN yarn --frozen-lockfile

ARG NEXT_TELEMETRY_DISABLED=1
ENV NEXT_TELEMETRY_DISABLED=$NEXT_TELEMETRY_DISABLED

RUN yarn build

FROM base AS runner

WORKDIR /workspace/next_app

USER node

COPY --from=builder /workspace/next_app/public ./public

COPY --from=builder --chown=node:node /workspace/next_app/.next/standalone ./
COPY --from=builder --chown=node:node /workspace/next_app/.next/static ./.next/static

ENV NEXT_TELEMETRY_DISABLED=$NEXT_TELEMETRY_DISABLED

CMD [ "node", "server.js" ]