import * as React from 'react';
import { View } from 'react-native';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export default function SettingsScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center px-4">
      <Card className="mb-4 w-full">
        <Text variant="h1" className="font-semibold">
          Settings Screen
        </Text>
      </Card>
      <Card className="w-full">
        <Text variant="h1" className="font-semibold">
          Settings Screen
        </Text>
      </Card>
    </View>
  );
}
