# AI Integration Guide

## ACoolAI
Primary intelligence endpoint.
- Endpoint: `ACOOLAI_ENDPOINT`
- Key: `ACOOLAI_KEY`

## ILAI
Enterprise fallback.
- Endpoint: `ILAI_ENDPOINT`
- Key: `ILAI_KEY`

## Patterns
- Always use the `ACoolAI` client in `src/ai/acoolai.js`.
- It handles automatic fallback to ILAI.
