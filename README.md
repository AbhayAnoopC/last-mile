# Last-Mile Delivery Platform

Monorepo for a prototype last-mile delivery system (a mini Intelcom-style service).

## Architecture Overview

This repo contains three main apps:

- **/backend** — FastAPI (Python) backend
  - Exposes REST APIs over HTTPS
  - Uses JWT authentication with roles: `ADMIN`, `DISPATCHER`, `DRIVER`
  - Connects to Postgres (via Supabase)

- **/web** — Next.js dispatcher dashboard
  - For operations staff / dispatchers
  - Upload parcel manifests (CSV)
  - Generate and assign routes to drivers
  - Monitor delivery status and daily summaries

- **/mobile** — React Native + Expo driver app
  - For drivers to see their assigned routes and stops
  - Navigate to stops
  - Mark deliveries as delivered / failed
  - (Nice-to-have) Capture photos as proof-of-delivery

## Tech Stack

- **Database & Storage**
  - Postgres via Supabase
  - Supabase Storage for proof-of-delivery photos

- **Backend**
  - FastAPI (Python)
  - Deployed on Render or Railway

- **Web Dashboard**
  - Next.js (TypeScript)
  - Deployed on Vercel

- **Mobile App**
  - React Native + Expo
  - Uses the same FastAPI backend and JWT auth

## Monorepo Structure

- `/backend` — FastAPI app
- `/web` — Next.js app
- `/mobile` — Expo app
- `/.github` — Issue and PR templates

## Development Flow

We work **EPIC by EPIC, STORY by STORY**:

1. EPIC 1 – Project Setup & DevOps Lite
2. EPIC 2 – Database & Data Model
3. EPIC 3 – Backend API (FastAPI)
4. EPIC 4 – Dispatcher Dashboard (Next.js)
5. EPIC 5 – Driver Mobile App (Expo)
6. EPIC 6 – Routing & Route Generation
7. EPIC 7 – POD Photos & Storage
8. EPIC 8 – Reporting & Daily Summary
9. EPIC 9 – QA & Demo Preparation

