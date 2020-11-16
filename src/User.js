import { firebase } from './config/config';

class User {
    register(email, password, navigation){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Login', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    async getUserData(){
        const user = await firebase.auth().currentUser;
        const result = await firebase.firestore()
                        .collection('users')
                        .doc(user.uid)
                        .get()
                        .then(snapshot => {
                            return (snapshot.data());
                        })
                        .catch(err => {
                            console.log('Error getting documents', err);
                        });
        return result;
    }
}

export default new User();