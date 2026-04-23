import * as React from 'react';
import { View } from 'react-native';
import { Task } from '@/components/task';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const task: ITask = {
    title: 'Submit Assignment',
    category: 'Due: Oct 22',
    isChecked: false,
  };

  return (
    <View className="bg-background flex flex-1">
      <Task task={task} />
    </View>
  );
}
