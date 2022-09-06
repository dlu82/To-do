import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    AddPart: {
        flexDirection: 'row',
        // width: '92%',
        height: 60,
        marginHorizontal:22,
        backgroundColor: '#3c305e',
        // marginLeft: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        // position: 'absolute',
        // bottom:20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        
    },
    AddText:{
        width: '90%',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
        // padding: 10
    },
});
export default style;