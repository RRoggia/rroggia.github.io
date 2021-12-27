from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from os import listdir
from os.path import isfile, join
import time

readingContentPath = '../reading-content'
coversPath = '../covers'

readingContentList = [f for f in listdir(readingContentPath) if isfile(join(readingContentPath, f))]
coversSet = set([f for f in listdir(coversPath) if isfile(join(coversPath, f))])


missingCover = []

for readingContent in readingContentList:
  if readingContent[:-3] + '.jpg' not in coversSet and readingContent[:-3] + '.png' not in coversSet:
    missingCover.append( readingContent[:-3] )



# print( readingContentList )
print( '*** Missing following covers:' )
for m in missingCover: print(' - ' + m)

print('*** Starting to collect data about images...')
driver = webdriver.Chrome(ChromeDriverManager().install())

for m in missingCover:
  try:
    driver.get('https://www.google.com/search?q=' + m + ' livro')

    html = driver.page_source

    soup = BeautifulSoup(html,'html.parser')
    image = soup.find('g-img', class_='ivg-i')
    image_address = image.get('data-lpage')
    print( 'Suggestion for ' + m + ' is: ' + image_address)
  except:
    print( 'Not found for ' + m )

