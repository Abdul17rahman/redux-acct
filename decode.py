import re

from urllib.request import urlopen


def print_unicode(url):
    with urlopen(url) as response:
        html = response.read().decode("utf-8")
        print(html)


if __name__ == "__main__":
    url = "https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub"
    print_unicode(url)
