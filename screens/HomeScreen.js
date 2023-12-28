// HomeScreen.js
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import {
  Card,
  Button,
  Title,
  Paragraph,
  List,
  Avatar,
  Modal,
  Portal,
  Text,
} from "react-native-paper";

const upcomingMedications = [
  {
    id: 1,
    name: "Aspirin",
    time: "8:00 AM",
    dosage: "100mg",
    remainingDoses: 15,
    stock: 30,
    intakeTime: "Before Breakfast",
    timeRelativeToFood: "30 minutes before",
    frequency: "Daily",
  },
  {
    id: 2,
    name: "Ibuprofen",
    time: "1:00 PM",
    dosage: "200mg",
    remainingDoses: 10,
    stock: 20,
    intakeTime: "After Lunch",
    timeRelativeToFood: "15 minutes after",
    frequency: "Every 6 hours",
  },
  {
    id: 3,
    name: "Paracetamol",
    time: "9:00 PM",
    dosage: "500mg",
    remainingDoses: 8,
    stock: 16,
    intakeTime: "Before Dinner",
    timeRelativeToFood: "45 minutes before",
    frequency: "Twice a day",
  },
  {
    id: 4,
    name: "Metformin",
    time: "7:30 AM",
    dosage: "850mg",
    remainingDoses: 20,
    stock: 40,
    intakeTime: "With Breakfast",
    timeRelativeToFood: "With food",
    frequency: "Daily",
  },
  {
    id: 5,
    name: "Simvastatin",
    time: "10:00 PM",
    dosage: "20mg",
    remainingDoses: 30,
    stock: 60,
    intakeTime: "Before Bed",
    timeRelativeToFood: "",
    frequency: "Daily",
  },
  {
    id: 6,
    name: "Lisinopril",
    time: "8:00 AM",
    dosage: "10mg",
    remainingDoses: 7,
    stock: 14,
    intakeTime: "Before Breakfast",
    timeRelativeToFood: "1 hour before",
    frequency: "Daily",
  },
  {
    id: 7,
    name: "Levothyroxine",
    time: "6:00 AM",
    dosage: "50mcg",
    remainingDoses: 25,
    stock: 50,
    intakeTime: "On Empty Stomach",
    timeRelativeToFood: "1 hour before food",
    frequency: "Daily",
  },
  {
    id: 8,
    name: "Amlodipine",
    time: "8:00 PM",
    dosage: "5mg",
    remainingDoses: 12,
    stock: 24,
    intakeTime: "After Dinner",
    timeRelativeToFood: "30 minutes after",
    frequency: "Daily",
  },
  {
    id: 9,
    name: "Atorvastatin",
    time: "9:00 AM",
    dosage: "40mg",
    remainingDoses: 5,
    stock: 10,
    intakeTime: "After Breakfast",
    timeRelativeToFood: "15 minutes after",
    frequency: "Once a week",
  },
  {
    id: 10,
    name: "Alprazolam",
    time: "As needed",
    dosage: "0.5mg",
    remainingDoses: 10,
    stock: 20,
    intakeTime: "Anytime",
    timeRelativeToFood: "",
    frequency: "As needed",
  },
];

const HomeScreen = ({}) => {
  const [visible, setVisible] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState(null);

  const showModal = (medication) => {
    setSelectedMedication(medication);
    setVisible(true);
  };

  const hideModal = () => setVisible(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Card>
          <Card.Content>
            <Title>Welcome to Medicine Reminder App</Title>
            <Paragraph>
              This app helps you keep track of your medication schedule.
            </Paragraph>
          </Card.Content>
        </Card>

        <View style={{ padding: 10 }}>
          <Button
            mode="contained"
            icon="pill"
            onPress={() => console.log("Pressed")}
            disabled={true} // Disabled by default
            style={{ marginBottom: 10 }}
          >
            Medicines
          </Button>

          <Button
            mode="contained"
            icon="information"
            onPress={() => console.log("Pressed")}
            disabled={true} // Disabled by default
          >
            About
          </Button>
        </View>
      </ScrollView>

        <View style={{ flex: 2, backgroundColor: "#f5f5f5",
      }}>
        <Card style={{ margin: 10, 
        }}>
        <Card.Title title="Upcoming Medications" /> 
          <ScrollView nestedScrollEnabled>
            {upcomingMedications.map((med) => (
              <List.Item
                key={med.id}
                title={med.name}
                description={`${med.dosage} at ${med.time}`}
                left={(props) => <Avatar.Icon {...props} icon="pill" />}
                onPress={() => showModal(med)}
                style={{ borderBottomWidth: 1, borderBottomColor: "#ddd" }}
              />
            ))}
          </ScrollView>
          </Card>
        </View>

        {/* Add a simple bottom bar */}
        <View style={{ backgroundColor: "#f5f5f5",
      }}>
        <Card style={{ margin: 10,
        }}>
        <Card.Title title="Bottom Bar" />
        <Card.Content>
          <Paragraph>Bottom bar content</Paragraph>
        </Card.Content>
        </Card>
        </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            padding: 20,
            backgroundColor: "white",
            margin: 20,
          }}
        >
          {selectedMedication && (
            <View>
              <Text>Name: {selectedMedication.name}</Text>
              <Text>Time: {selectedMedication.time}</Text>
              <Text>Dosage: {selectedMedication.dosage}</Text>
              <Text>Remaining Doses: {selectedMedication.remainingDoses}</Text>
              <Text>Stock: {selectedMedication.stock}</Text>
              <Text>Intake Time: {selectedMedication.intakeTime}</Text>
              <Text>
                Time Relative to Food: {selectedMedication.timeRelativeToFood}
              </Text>
              <Text>Frequency: {selectedMedication.frequency}</Text>
            </View>
          )}
        </Modal>
      </Portal>
    </View>
  );
};

export default HomeScreen;
