# Algorithm Designed By Dixanta Bahadur Shrestha
# Creators Institute of Business & Technology [CIBT]
# https://creators.institute
# Purnachandi Marg, Lalitpur, Nepal

numbers=[
    'Zero','One','Two','Three','Four','Five',
    'Six','Seven','Eight','Nine'
]
less_20=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen",
"Sixteen","Seventeen","Eighteen","Nineteen"]

below_hundred=["Twenty","thirty",
"fourty","fifty","sixty","seventy","eighty","ninety"]

def two_places(num_str):
   
    num=int(num_str)
    if(num<10):
        if(num==0):
            return ''
        else: return numbers[int(num_str)].capitalize()
    elif(num >=10 and num<20):
        return less_20[int(num_str[1])].capitalize()
    else:
        result=below_hundred[int(num_str[0])-2].capitalize() 
        if (int(num_str[1])!=0): result += " " + numbers[int(num_str[1])].capitalize()
        return result
    


def num2word(num):
    num_str=str(num)
    num_length=len(num_str)
    if(num_length==1):
        print(numbers[int(num_str)].capitalize())
    if(num_length==2):
        print(two_places(num_str))
    elif(num_length==3):
        print(numbers[int(num_str[0])] + " Hundred " + two_places(num_str[1:]))
    elif(num_length==4):
        pos=int(num_str[1])
        value=''
        if(pos > 0): value = numbers[pos] + " Hundred "

        print(numbers[int(num_str[0])] + " Thousand " + value + two_places(num_str[2:]))
    elif(num_length==5):
        pos=int(num_str[2])
        value=''
        if(pos > 0): value = numbers[pos] + " Hundred "
        print(two_places(num_str[0:2]) + " Thousand " + value + two_places(num_str[3:]))


num2word(0)
num2word(10)
num2word(15)
num2word(20)
num2word(45)
num2word(100)
num2word(165)
num2word(555)
num2word(1001)
num2word(1010)
num2word(9999)
num2word(10001)
num2word(10010)
num2word(99989)

