from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/hello")
def say_hello_world():
    return {"result": "Hello World"}


if __name__ == "__main__":
    app.run(debug=True)


# for number in range(1, 55):
#     if number % 2 == 0:
#         print(number + " is divisable by 2")
#     elif number % 3 == 0:
#         print(number + " is divisable by 3")
#     elif (number % 2 == 0 and number % 3 == 0):
#         print(number + "is divisable by 2 and 3")
#     else:
#         print(number + " is  NOT divisable by 2 or 3")
