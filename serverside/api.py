from flask import Flask, request, jsonify

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False


@app.route('/create', methods=['POST'])
def post_create():
    json = request.get_json()
    return jsonify(json)
