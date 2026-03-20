import os
import requests

# Images URLs aur file names
images = [
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a858c3e6276dc8c53_amenities-01.svg", "amenities-01.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a3d717f1dc1a5d0d3_amenities-02.svg", "amenities-02.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a80806ed84725d206_amenities-03.svg", "amenities-03.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a3d717f1dc1a5d0d3_amenities-02.svg", "amenities-04.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29aeaa24fed048a124f_amenities-05.svg", "amenities-05.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a0f6cca562dfbe969_amenities-06.svg", "amenities-06.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29a10a4a5b6acb24f23_amenities-07.svg", "amenities-07.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29b00a0d08adff635b9_amenities-08.svg", "amenities-08.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29c9a97cb3ec9122d52_amenities-09.svg", "amenities-09.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29cdcc68218bae3ff95_amenities-10.svg", "amenities-10.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29d8218450ea094d420_amenities-11.svg", "amenities-11.svg"),
    ("https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac29d0f6cca562dfbeb36_amenities-12.svg", "amenities-12.svg"),
]

# Destination folder
dest_folder = "public/luxury"

# Folder create karo agar exist nahi karta
os.makedirs(dest_folder, exist_ok=True)

# Download images
for url, filename in images:
    response = requests.get(url)
    if response.status_code == 200:
        with open(os.path.join(dest_folder, filename), "wb") as f:
            f.write(response.content)
        print(f"{filename} downloaded successfully!")
    else:
        print(f"Failed to download {filename}")