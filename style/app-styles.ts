import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  blackText: {
    color: 'black'
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 250,
    opacity: 0.7,
    marginTop: 10 // Adjust spacing if needed
  },
  buttonContainer: {
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    margin: 10,
    padding: 15
  },
  cardTitle: {
    color: 'black',
  },
  closeButton: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  highlight: {
    fontWeight: '700',
  },
  listItem: {
    padding: 0,
    color: 'black'
  },
  modalCard: {
    padding: 20,
    borderRadius: 10,
    width: '75%'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1212',
    width: '100%'
  },
  modalText: {
    fontSize: 15,
    padding: 5,
    color: 'black'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    padding: 10,
    color: 'white'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black'
  },
});

export default styles;