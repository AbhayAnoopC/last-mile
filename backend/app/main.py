from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Last Mile Delivery API",
    version="0.1.0",
)

# For now allow all origins; we can tighten this later.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later: restrict to your web + mobile domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Last Mile Delivery API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}