# 🚀 Habla Conmigo - Backend básico con FastAPI

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Habla Conmigo API")

# Permitir frontend en local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def raiz():
    return {"mensaje": "API de Habla Conmigo funcionando correctamente 🎉"}
