# TecWebProj
Enter into the folder containig the files downloaded from GitHub

Type the command to enter the project's root directory:
cd tecwebproject/

Create a virtual environment for Python:
python3 -m venv venv
or
pyenv exec python -m venv .venv

Activate the virtual environment:
source venv/bin/activate
or
source .venv/bin/activate      

Install Flask with:
pip install flask

Install the required libreries:
pip install -r requirements.txt

Start Flask:
flask run --host 0.0.0.0
or on localhost:
flask run
