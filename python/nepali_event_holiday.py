import requests as req
from bs4 import BeautifulSoup

url='https://www.hamropatro.com/calendar/2077/'

def scrap_data(url,month):
    link=url+str(month)
    print(link)
    resp=req.get(link)
    soup=BeautifulSoup(resp.text,'html.parser')
    monthly=soup.find('ul',attrs={'class':'dates'})
    dates=monthly.findAll('li')
    content=''
    for date in dates:
        
        if date.has_attr('class') and ''.join(date['class']).strip()!='disable':
            event=date.find('span',attrs={'class':'event'})
            nep_date=date.find('span',{'class':'nep'})
            if(event.text!='--'):
                content +=str(month)+','
                content +=nep_date.text +','
                content +=event.text +','
                if(len(date['class'])>0 and date['class'][0]=='holiday'):
                    content +='Yes'
                content +="\n"
        
    return content

file=open('calendar.csv','w+')
file.write('Month,Date,Event,Holiday\n')
for i in range(1,13):
    content=scrap_data(url,i)
    file.write(content)
    print(content)
file.close()
