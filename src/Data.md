# Structure
collection user-> doc (id,photo,name,email) collection contact (id,photo,name,email) [sidebar/newChat]
collection chat -> ->doc chat(members:[user1,user2](id)) -> collection messages ->  doc message (timestamp, message, sendby (id du doc user) ) [messages]


# Ajouter un contact
Vérifier si l'utilisateur existe

# Récuperer les messages d'un user
db.collection("chat").where('members', 'array-contains-any',
    user.id)
    .collection("messages")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         
            console.log(doc.id, " => ", doc.data());
        });
    })
        
# Rajouter un message
db.collection("chat").where('members', 'array-contains-any',
    user.id)
    .collection("messages")
    .get()
    .add({
        sendBy : user.uid,
        messages : input,
        timestamp : 1
    })