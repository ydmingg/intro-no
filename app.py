from dotenv import load_dotenv
import os
from flask import Flask, jsonify, abort, make_response

# 加载 .env 文件中的环境变量
load_dotenv()

app = Flask(__name__)

# 使用 os.environ 获取环境变量
app.config['ENV'] = os.getenv('FLASK_ENV')
app.config['DEBUG'] = os.getenv('FLASK_DEBUG', '0') == '1'

# 示例 API 路由
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    }
    return jsonify(data)

# 404 错误处理
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)