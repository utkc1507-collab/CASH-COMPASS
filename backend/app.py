from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import uuid

expenses = []

@app.route('/api/expenses', methods=['GET'])
def get_expenses():
    return jsonify(expenses)

@app.route('/api/expenses', methods=['POST'])
def add_expense():
    data = request.json
    expense = {
        "id": str(uuid.uuid4()),
        "title": data.get("title", ""),
        "amount": data.get("amount"),
        "category": data.get("category"),
        "date": data.get("date", ""),
        "notes": data.get("notes", "")
    }
    expenses.append(expense)
    return jsonify(expense)

@app.route('/api/expenses/<string:id>', methods=['DELETE'])
def delete_expense(id):
    global expenses
    expenses = [e for e in expenses if e["id"] != id]
    return {"message": "Deleted"}

if __name__ == '__main__':
    app.run(port=5001, debug=True)
