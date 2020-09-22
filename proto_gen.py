import os
import shutil
import subprocess
from glob import glob


def gen(qoin_path):
    if os.path.exists('src/proto'):
        shutil.rmtree("src/proto")
    os.makedirs("src/proto")

    include_path = "/usr/local/include/"
    qoin_proto_files = glob(os.path.join(qoin_path, 'qoin', 'proto', '**', '*.proto'), recursive=True)
    mediapipe_path = os.path.join(qoin_path, 'bazel-qoin', 'external', 'mediapipe')
    mediapipe_path = os.path.abspath(mediapipe_path)

    mediapipe_proto_files = glob(os.path.join(mediapipe_path, 'mediapipe', 'framework', '**', '*.proto'),
                                 recursive=True)

    subprocess.call([
        "protoc",
        f'-I={qoin_path}:{mediapipe_path}:{include_path}',
        '--js_out=import_style=commonjs,binary:src/proto/',
        '--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/proto/',
        *qoin_proto_files,
        *mediapipe_proto_files]
    )

if __name__ == "__main__":
    gen("../qoin", )
