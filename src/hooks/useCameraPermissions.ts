import {useEffect} from 'react';
import {useCameraPermission} from 'react-native-vision-camera';

interface UseCameraPermissionsReturn {
  hasPermission: boolean | null;
  requestPermission: () => void;
}

const useCameraPermissions = (): UseCameraPermissionsReturn => {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  return {hasPermission, requestPermission};
};

export default useCameraPermissions;
