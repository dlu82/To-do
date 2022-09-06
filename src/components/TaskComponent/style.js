import { StyleSheet } from "react-native";
// import style from "../../screens/ToDoApp/style";

const style = StyleSheet.create({
    Task:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        marginTop: 20,
      },
    TaskName: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        paddingHorizontal: 10,
        marginTop: 15,
    },
    TextPart: {
        width:"80%",
        padding:10,
        flexDirection: 'row',
        backgroundColor: '#3c305e',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginLeft: 10,
        
      },
    DeleteImg: {
        height: 30, 
        width: 30,
        tintColor: 'white',

    },
})
export default style