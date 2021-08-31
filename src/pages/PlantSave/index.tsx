import React, { useState } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { SimpleLineIcons } from '@expo/vector-icons';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { format, isBefore } from 'date-fns';

import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import { PlantProps, savePlant } from '../../lib/storage';
import { styles } from './styles';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      Alert.alert('Escolha uma hora no futuro! ⏰');
    } else if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.dispatch(
        CommonActions.navigate({
          name: 'Confirmation',
          params: {
            title: 'Tudo certo',
            subtitle:
              'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
            buttonTitle: 'Muito Obrigado :D',
            icon: 'hug',
            nextScreen: 'MyPlants',
          },
        }),
      );
    } catch {
      Alert.alert('Não foi possível salvar. 😢');
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollListContainer}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SimpleLineIcons
            name="arrow-left"
            size={24}
            color="black"
            style={styles.backArrow}
            onPress={() => navigation.goBack()}
          />

          <SvgFromUri uri={plant.photo} height={150} width={150} />

          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterdrop} style={styles.tipImage} />

            <Text style={styles.tipText}>{plant.water_tips}</Text>
          </View>

          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <TouchableOpacity
              style={styles.dateTimePickerButton}
              onPress={handleOpenDatetimePickerForAndroid}
            >
              <Text style={styles.dateTimePickerText}>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </Text>
            </TouchableOpacity>
          )}

          <Button title="Cadastrar planta" onPress={handleSave} />
        </View>
      </View>
    </ScrollView>
  );
}
