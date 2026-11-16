from PIL import Image, ImageDraw, ImageFont

canvas = Image.new('RGBA', (960, 960), (0, 0, 0, 0))
draw = ImageDraw.Draw(canvas)

cx = 480
cy = 480
r = 300

# Outer navy badge
for radius, color in [(310, (40, 66, 88, 255)), (285, (24, 46, 64, 255))]:
    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=color)

# White inner ring
for radius, width, color in [(260, 18, (255, 255, 255, 255)), (234, 10, (246, 195, 54, 255))]:
    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), outline=color, width=width)

# Gold accent rays
for i in range(16):
    angle = i * (360 / 16)
    x1 = cx + (r - 18) * __import__('math').cos(__import__('math').radians(angle))
    y1 = cy + (r - 18) * __import__('math').sin(__import__('math').radians(angle))
    x2 = cx + (r + 34) * __import__('math').cos(__import__('math').radians(angle))
    y2 = cy + (r + 34) * __import__('math').sin(__import__('math').radians(angle))
    draw.line((x1, y1, x2, y2), fill=(245, 196, 80, 255), width=18)

# Center book and torch emblem
book_left = (350, 485)
book_right = (610, 485)
book_top = 400
book_bottom = 610

draw.rounded_rectangle((360, 420, 600, 600), radius=18, fill=(255, 255, 255, 255), outline=(233, 183, 58, 255), width=8)
draw.rounded_rectangle((370, 430, 590, 590), radius=14, fill=(246, 245, 243, 255))

# Book pages
for x in range(395, 560, 28):
    draw.line((x, 450, x + 8, 570), fill=(232, 187, 92, 255), width=4)

# Torch icon
mid_x = 480
mid_y = 430

draw.polygon([(mid_x - 40, mid_y + 70), (mid_x + 40, mid_y + 70), (mid_x, mid_y - 90)], fill=(221, 127, 41, 255))
draw.rectangle((mid_x - 18, mid_y + 70, mid_x + 18, mid_y + 170), fill=(221, 127, 41, 255))

draw.arc((mid_x - 80, mid_y - 40, mid_x + 80, mid_y + 120), start=200, end=340, fill=(255, 218, 128, 255), width=10)

draw.ellipse((mid_x - 14, mid_y - 112, mid_x + 14, mid_y - 82), fill=(246, 205, 106, 255))

draw.line((mid_x, mid_y - 82, mid_x, mid_y + 35), fill=(255, 214, 132, 255), width=8)

# Text around badge
font = ImageFont.truetype('DejaVuSans-Bold.ttf', 68)
font_small = ImageFont.truetype('DejaVuSans-Bold.ttf', 38)
font_year = ImageFont.truetype('DejaVuSans-Bold.ttf', 52)

# Use simple centered text for the approximate logo design
text_color = (255, 255, 255, 255)
draw.text((cx, 290), 'SANTA RITA', fill=text_color, font=font, anchor='mm')
draw.text((cx, 700), 'PAMPANGA', fill=text_color, font=font_small, anchor='mm')
draw.text((cx, 645), 'COLLEGE', fill=text_color, font=font_small, anchor='mm')
draw.text((cx, 598), '1945', fill=(246, 196, 72, 255), font=font_year, anchor='mm')

# Save output
out = 'assets/images/campus-logo.png'
canvas.save(out)
print(f'Created {out}')
