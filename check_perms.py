import os
path = '/Users/fernandocalado/Library/CloudStorage/Dropbox/ShiftLabs/Flow/node_modules'
try:
    print(f"Checking {path}")
    print(f"Exists: {os.path.exists(path)}")
    print(f"Access R: {os.access(path, os.R_OK)}")
    print(f"Access W: {os.access(path, os.W_OK)}")
    print(f"Access X: {os.access(path, os.X_OK)}")
    print(f"Stat: {os.stat(path)}")
except Exception as e:
    print(f"Error: {e}")
