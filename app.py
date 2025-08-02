from flask import Flask, jsonify, render_template
import random
import json

app = Flask(__name__)

# Load quotes from JSON file
with open('quotes.json', 'r') as f:
    quotes = json.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/quote')
def quote():
    random_quote = random.choice(quotes)
    return jsonify(random_quote)

if __name__ == '__main__':
    app.run(debug=True)
