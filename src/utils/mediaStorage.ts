// IndexedDB helpers for durable video persistence (supports large MP4 files)
export const openMediaDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB not available'));
      return;
    }
    const request = indexedDB.open('AsiatechMediaDB', 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveVideoBlob = async (blob: Blob): Promise<void> => {
  try {
    const db = await openMediaDB();
    const tx = db.transaction('videos', 'readwrite');
    tx.objectStore('videos').put(blob, 'jaguar_welcome_video');
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    // Dispatch custom event so all active components update their video URL
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('asiatech-video-updated'));
    }
  } catch (err) {
    console.warn('Failed to persist video in IndexedDB:', err);
  }
};

export const loadVideoBlob = async (): Promise<Blob | null> => {
  try {
    const db = await openMediaDB();
    const tx = db.transaction('videos', 'readonly');
    const store = tx.objectStore('videos');
    const request = store.get('jaguar_welcome_video');
    return new Promise((resolve) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
};

// LocalStorage helpers for fast custom school logo persistence
export const saveCustomLogo = (dataUrl: string): void => {
  try {
    localStorage.setItem('asiatech_custom_logo', dataUrl);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('asiatech-logo-updated'));
    }
  } catch (e) {
    console.warn('Failed to save logo in localStorage:', e);
  }
};

export const getCustomLogo = (): string | null => {
  try {
    return localStorage.getItem('asiatech_custom_logo');
  } catch {
    return null;
  }
};
