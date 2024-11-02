import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null); // Dropdown hook
  const [showTabs, setShowTabs] = useState(false); // Control visibility of tabs

  // Selections for the onboarding guides
  const messages = [
    {
      text: 'Student',
      options: [
        { label: 'Account Management', url: 'https://www.tamiu.edu/oit/students/index.shtml#account' },
        { label: 'Elearning guides', url: 'https://www.tamiu.edu/distance/technical-support-services.shtml' },
        { label: 'Check status', url: 'https://info.tamiu.edu/applicationstatus/applicationstatus.aspx#Check%20Status' },
      ],
    },
    {
      text: 'Staff',
      options: [
        { label: 'Account Management', url: 'https://www.tamiu.edu/oit/facultystaff/staff-manageacct.shtml' },
        { label: 'Infobase learning cloud', url: 'https://www.tamiu.edu/distance/technology/infobase-learning-cloud.shtml' },
        { label: 'Forms', url: 'https://www.tamiu.edu/oit/facultystaff/oitforms.shtml' },
      ],
    },
    {
      text: 'Professor',
      options: [
        { label: 'Account Management', url: 'https://www.tamiu.edu/oit/facultystaff/staff-manageacct.shtml' },
        { label: '', url: 'https://example.com/3-2' },
        { label: '', url: 'https://example.com/3-3' },
      ],
    },
  ];

  // hook to toggle dropdown
  const toggleDropdown = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index); // Collapse or open dropdown
  };

  // hook for link press
  const handleLinkPress = (url) => {
    Linking.openURL(url).catch(err => console.error("Error opening URL", err)); // Error handling
  };

    // hook to show tabs
    const handleStartHerePress = () => {
      setShowTabs(true);
    };

  return (
      <View style={styles.container}>
        <Image style={styles.backgroundpng} source={require('./assets/welcomeimage.png')} />
    
        {!showTabs ? (
          <TouchableOpacity style={styles.welcomeMessage} onPress={handleStartHerePress}>
            <Text style={styles.welcomeText}>Welcome to Onboarding, press here</Text>
          </TouchableOpacity>
        ) : (
          // Corrected this line: removed the curly braces around messages.map
          messages.map((message, index) => (
            <View key={index} style={styles.whiteBox}>
              <View style={styles.textContainer}>
                <TouchableOpacity onPress={() => toggleDropdown(index)}>
                  <Text style={styles.texts}>{message.text}</Text>
                </TouchableOpacity>
              </View>
    
              {/* Dropdown logic */}
              {selectedIndex === index && (
                <View style={styles.dropdown}>
                  {message.options.map((option, optIndex) => (
                    <TouchableOpacity key={optIndex} onPress={() => handleLinkPress(option.url)}>
                      <Text style={styles.dropdownOption}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))
        )}
    
        <StatusBar style="auto" />
      </View>
    );
  }
// Styling of UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundpng: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  welcomeMessage: {
    padding: 20,
    backgroundColor: '#000000', // Green background
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff', // White text
    fontWeight: 'bold',
  },
  whiteBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
  },
  texts: {
    fontSize: 18,
    color: 'maroon',
    fontWeight: 'bold',
  },
  textContainer: {
    marginVertical: 10,
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  dropdownOption: {
    paddingVertical: 5,
    fontSize: 16,
    color: '#333',
  },
});