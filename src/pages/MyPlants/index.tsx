import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import noDataEmoji from '../../assets/no-data-emoji.png';
import waterDrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { PlantProps, loadPlant, removePlant } from '../../lib/storage';
import { styles } from './styles';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWatered, setNextWatered] = useState<string>();

  const navigation = useNavigation();

  function handleRegisterNewPlant() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'NewPlant',
      }),
    );
  }

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏🏼',
        style: 'cancel',
      },
      {
        text: 'Sim 🥲',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setMyPlants(oldData =>
              oldData.filter(item => item.id !== plant.id),
            );
          } catch (error) {
            Alert.alert('Não foi possível remover! 🥲');
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageData() {
      const storedPlants = await loadPlant();

      if (storedPlants.length > 0) {
        const nextTime = formatDistance(
          new Date(storedPlants[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          { locale: pt },
        );

        setNextWatered(
          `Não esqueça de regar a ${storedPlants[0].name} à ${nextTime} horas.`,
        );

        setMyPlants(storedPlants);
      }

      // setLoading(false);
    }

    loadStorageData();
  }, []);

  if (myPlants.length === 0) {
    return (
      <View style={styles.containerNoData}>
        <Header />

        <View style={styles.wrapperNoData}>
          <Image source={noDataEmoji} style={styles.noDataEmoji} />

          <Text style={styles.noDataText}>
            Você não tem nenhuma plantinha cadastrada
          </Text>

          <View style={styles.registerPlant}>
            <Button
              title="Cadastrar uma plantinha"
              onPress={handleRegisterNewPlant}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterDrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>

        <FlatList
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
