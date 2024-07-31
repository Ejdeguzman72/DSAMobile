import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    padding: 10,
    color: 'white'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center'
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  blackText: {
    color: 'black'
  },
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  cardTitle: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1212'
  },
  modalCard: {
    padding: 20,
    borderRadius: 10
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black'
  },
  listItem: {
    padding: 0,
    color: 'black'
  },
  closeButton: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
