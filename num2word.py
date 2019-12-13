# Algorithm Designed By Dixanta Bahadur Shrestha
# Creators Institute of Business & Technology [CIBT]
# https://creators.institute
# Purnachandi Marg, Lalitpur, Nepal

numbers=[
    'Zero','One','Two','Three','Four','Five',
    'Six','Seven','Eight','Nine'
]
less_20=["Ten","eleven","twelve","thirteen","fourteen","fifteen",
"sixteen","seventeen","eighteen","nineteen"]

below_hundred=["twenty","thirty",
"fourty","fifty","sixty","seventy","eighty","ninty"]

def two_places(num_str):
    num=int(num_str)
    if(num<20):
        return less_20[int(num_str[1])]
    elif(num>=20):
        if(int(num_str[1])==0):
           return (below_hundred[int(num_str[0])-2])
        else:
            return(below_hundred[int(num_str[0])-2] +" " + numbers[int(num_str[1])])    
    return ""


def num2word(num):
    num_str=str(num)
    num_length=len(num_str)
    if(num_length==1):
        print(numbers[int(num_str)])
    if(num_length==2):
        print(two_places(num_str))
    elif(num_length==3):
        print(numbers[int(num_str[0])] + " hundred " + two_places(num_str[1:]))
    elif(num_length==4):
        print(numbers[int(num_str[0])] + " thousand " +numbers[int(num_str[1])] + " hundred " + two_places(num_str[2:]))


num2word(0)
num2word(10)
num2word(15)
num2word(20)
num2word(45)
num2word(165)
num2word(555)
num2word(9999)

