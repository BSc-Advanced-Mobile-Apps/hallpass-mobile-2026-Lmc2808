import { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';
import { ITask } from '@/app/index';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  const [checked, setChecked] = useState(false);

  return (
    <View className="bg-background flex flex-1">
      <View className="flex flex-row py-4">
        <View className="flex w-16 items-center justify-center">
          <Checkbox
            className="border-foreground checked:bg-foreground"
            checked={checked}
            onCheckedChange={setChecked}
          />
        </View>

        <View className="border-foreground-transparent flex-1 border-b py-4">
          <Text className="text-foreground"></Text>
          <Text className="text-foreground-transparent"></Text>
        </View>
      </View>
    </View>
  );
}
