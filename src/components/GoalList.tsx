import './GoalList.css';
import { IonList, IonIcon, IonItem } from '@ionic/react'
import { add } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const GoalList: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonList>
      <IonItem className='addGoalIcon'>
        <IonIcon icon={add} size="large" />
      </IonItem>

    </IonList>
  );
};

export default GoalList;
