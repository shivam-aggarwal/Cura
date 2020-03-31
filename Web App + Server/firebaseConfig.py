import pyrebase
import json
def pushToFirebase(med_name,salt,user = "dummy"):
    if type(med_name) != str:
        raise Exception("Medicine name should of type string")
    if type(salt) != list:
        raise Exception("Medicine name should of type list")
    config_data = open("myconfig.json","r")
    config = json.load(config_data)
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    data = {"med_name":med_name,"salt":salt}
    db.child(user).push(data)
# def getDataFromFirebase(user = "dummy"):
#     path = "PROFILE DETAILS/"
#     config_data = open("myconfig.json","r")
#     config = json.load(config_data)
#     firebase = pyrebase.initialize_app(config)
#     db = firebase.database()
#     all_user = db.child(user).get().each()
#     saltFreq = {}
#     saltList = []
#     for user in all_user:
#         item = user.item
#         saltList.append(item[1])
#         for i in item[1]['salt']:
#             saltFreq[i] = saltFreq.get(i,0)+1
#     return saltList,saltFreq
def getDataFromFirebase(user):
    path = "PROFILE DETAILS/"
    pathToBeAdded = "/food"
    path = path+user+pathToBeAdded
    config_data = open("myconfig.json","r")
    config = json.load(config_data)
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    foodTaken = db.child(path).get().each()
    ingFreq = {}
    ingList = []
    for food in foodTaken:
        ingredients = food.item[1]
        ingList.append(food.item[1])
        for i in ingredients:
            ingFreq[i] = ingFreq.get(i,0)+1
    # print(ingFreq)
    # print(ingList)
    # print(len(ingList))
    return ingList,ingFreq
def getMedicineAllergyChance(listOfSalt,user="dummy"):
    if type(listOfSalt) != list:
        raise Exception("list of Salt should be list")
    _,saltFreq = getDataFromFirebase(user)
    ans = []
    count = []
    total = 0
    for i in saltFreq:
        total += saltFreq[i]
    for i in listOfSalt:
        if i in saltFreq:
             ans.append(saltFreq[i]/total)
             count.append(saltFreq[i])
    prob = 0
    for i in range(len(ans)):
        prob = prob + (ans[i]*count[i])
    prob = prob/sum(count) 
    return prob