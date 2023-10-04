import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GoalList from '../components/GoalList';
import './Tab1.css';

const GoaList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goal List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Goal List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GoalList name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default GoaList;
