from PyPDF2 import PdfReader
import enchant

def visitor_body(text, cm, tm, font_dict, font_size):
    y = tm[5]
    if y > 10 and y < 780:
        parts.append(text)

def format(text):
    return text


dictionary = enchant.Dict("en_US")
reader = PdfReader("paper2.pdf")
number_of_pages = len(reader.pages)
textList = [""] * number_of_pages
for i in range(number_of_pages):
    parts = []
    reader.pages[i].extract_text(visitor_text=visitor_body)
    text_body = "".join(parts)
    text = format(text_body)
    textList[i] = text_body
f = open("test.txt", "w")
f.write(textList[1])
f.close()



