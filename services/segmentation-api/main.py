from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/")
def health_check():
    return {"status": "OK"}

@app.post("/segment")
async def segment_image(file: UploadFile = File(...)):
    # Placeholder logik
    return JSONResponse({
        "segments": [
            {
                "id": "forside_felt_1",
                "polygon": [[0,0], [1,0], [1,1], [0,1]],
                "surface": "forside"
            }
        ]
    })