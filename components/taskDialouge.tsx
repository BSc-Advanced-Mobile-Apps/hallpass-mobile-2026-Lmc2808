import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

import { ITask } from '@/app';

interface TaskDialogProps {
  onSave?: (task: ITask) => void;
  task: ITask;
  setTask: (task: ITask) => void;
  setShowDialog: (showDialog: boolean) => void;
  showDialog: boolean;
}
function TaskDialogue({ onSave, task, setTask, setShowDialog, showDialog }: TaskDialogProps) {
  const [editedTitle, setEditedTitle] = React.useState(task.title);
  const [editedCategory, setEditedCategory] = React.useState(task.category);

  const isNewTask = task.title === '' && task.category === '';

  const handleUpdateTitle = (title: string) => {
    setEditedTitle(title);
  };
  const handleUpdateCategory = (category: string) => {
    setEditedCategory(category);
  };

  const handleSave = () => {
    const nextTask = {
      ...task,
      title: editedTitle,
      category: editedCategory,
    };

    setTask(nextTask);
    if (onSave) {
      onSave(nextTask);
      return;
    }
    setEditedTitle('');
    setEditedCategory('');
    setShowDialog(false);
  };

  return (
    <DialogContent className="bg-background w-96 rounded-2xl p-6">
      <DialogHeader>
        <DialogTitle>{isNewTask ? 'Add' : 'Edit'} Task</DialogTitle>
        <DialogDescription>Create a new task here...</DialogDescription>
      </DialogHeader>

      <View className="gap-4">
        <Input value={editedTitle} placeholder="Task title" onChangeText={handleUpdateTitle} />
        <Input value={editedCategory} placeholder="Category" onChangeText={handleUpdateCategory} />
      </View>

      <DialogFooter className="mt-4 flex flex-row gap-2">
        <Button
          className="border-brand-primary flex-1 rounded-3xl border bg-transparent"
          onPress={() => setShowDialog(false)}>
          <Text className="text-brand-primary">Cancel</Text>
        </Button>
        <Button className="bg-brand-primary flex-1w-1/2 rounded-3xl" onPress={handleSave}>
          <Text>Submit +</Text>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export { TaskDialogue };
