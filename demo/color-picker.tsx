'use client';

import { ColorPicker } from '@/components/color-picker';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from "@/components/ui/switch";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { useEffect, useState, memo, useCallback } from 'react';

// Memoized Picker component to optimize re-rendering
const Picker = memo(({ 
    setColor,
    isColorFormat, 
    isOpacity, 
    isEyeDropper 
}: {
    setColor: (color: string) => void,
    isColorFormat: boolean, 
    isOpacity: boolean, 
    isEyeDropper: boolean 
}) => {
    return (
        <ColorPicker
            onColorChange={(color) => setColor(color)}
            isColorFormat={isColorFormat}
            isOpacity={isOpacity}
            isEyeDropper={isEyeDropper}
        />
    );
});

Picker.displayName = 'Picker';

export default function ColorPickerDemo() {
    const [color, setColor] = useState('#ff0000');
    const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'hsl' | 'hsv'>('hex');
    const [isColorFormat, setIsColorFormat] = useState(true);
    const [isOpacity, setIsOpacity] = useState(true);
    const [isEyeDropper, setIsEyeDropper] = useState(true);

    // Validate and update color
    const handleColorChange = useCallback((newColor: string) => {
        // Remove any whitespace
        newColor = newColor.trim();

        // Basic validation for color formats
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
        const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
        const hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/;
        const hsvRegex = /^hsv\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/;

        // Check if the color matches any of the current format's regex
        let isValidColor = false;
        switch(colorFormat) {
            case 'hex':
                isValidColor = hexRegex.test(newColor);
                break;
            case 'rgb':
                isValidColor = rgbRegex.test(newColor);
                break;
            case 'hsl':
                isValidColor = hslRegex.test(newColor);
                break;
            case 'hsv':
                isValidColor = hsvRegex.test(newColor);
                break;
        }

        // If valid, update the color
        if (isValidColor) {
            setColor(newColor);
        }
    }, [colorFormat]);

    // Log changes for debugging (optional)
    useEffect(() => {
        console.log('Color state changed:', { 
            color, 
            colorFormat, 
            isColorFormat, 
            isOpacity, 
            isEyeDropper 
        });
    }, [color, colorFormat, isColorFormat, isOpacity, isEyeDropper]);

    return (
        <div className="flex justify-center items-center gap-12 w-full">
            <Picker
                setColor={setColor}
                isColorFormat={isColorFormat} 
                isOpacity={isOpacity} 
                isEyeDropper={isEyeDropper} 
            />

            <div className="flex flex-col items-center justify-center gap-6 ml-8">
                <div className="flex items-center gap-2">
                    <Label className="flex-shrink-0 w-44" htmlFor="color-code">Output Color</Label>
                    <Input
                        id="color-code"
                        value={color}
                        className="w-full uppercase disabled:opacity-100"
                        disabled
                    />
                </div>
                <label className="w-full font-sm font-bold">Picker's Properties</label>
                <div className="w-full flex items-center gap-2">
                    <Label className="flex-shrink-0 w-44 font-mono" htmlFor="color-format-need">isColorFormat</Label>
                    <Switch
                        id="color-format-need"
                        className="rounded-md [&_span]:rounded"
                        checked={isColorFormat}
                        onCheckedChange={(checked) => setIsColorFormat(checked)}
                    />
                </div>
                <div className="w-full flex items-center gap-2">
                    <Label className="flex-shrink-0 w-44 font-mono" htmlFor="opacity">isOpacity</Label>
                    <Switch
                        id="opacity"
                        className="rounded-md [&_span]:rounded"
                        checked={isOpacity}
                        onCheckedChange={(checked) => setIsOpacity(checked)}
                    />
                </div>
                <div className="w-full flex items-center gap-2">
                    <Label className="flex-shrink-0 w-44 font-mono" htmlFor="eye-dropper">isEyeDropper</Label>
                    <Switch
                        id="eye-dropper"
                        className="rounded-md [&_span]:rounded"
                        checked={isEyeDropper}
                        onCheckedChange={(checked) => setIsEyeDropper(checked)}
                    />
                </div>
            </div>
        </div>
    );
}