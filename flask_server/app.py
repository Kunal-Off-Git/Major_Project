from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return """
    <html>
        <head><title>Flask Message</title></head>
        <body>
            <h1>Hello from Flask!</h1>
        </body>
    </html>
    """

if __name__ == '__main__':
    app.run(port=5001, debug=True)
