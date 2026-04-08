# Slider / Web components - Range

Input control allowing users to select a value within a range.

LightShare

## Main

disable

discrete

withTickMarks

valueStart

valueEnd

min

max

step

```
<cv-slider-range> </cv-slider-range>
```

### Methods

Method signature

Description

`valueToValueIndicatorTransform(value: number) => string`

Override this method to transform the value of a given knob to the text that should be displayed in the value indicator of a discrete slider. Additionally, this will set the `aria-valuetext`.

`layout(skipUpdateUI = false) => Promise<void>`

Recomputes the dimensions and re-lays out the component. This should be called if the dimensions of the slider itself or any of its parent elements change programmatically (it is called automatically on pointerdown). The skipUpdateUI parameter determines whether the UI should be updated alongside the internal clientRect model.

### Events

Event name

Detail

Description

`input`

`{value: number, thumb: Thumb}`\*

Fired when the value changes due to user input. Similar to the `input` event of the native `<input type="range">` element, the `input` event will not fire when `value` is modified via JavaScript.

`change`

`{value: number, thumb: Thumb}`\*

Fired when the value changes and the user has finished interacting with the slider. Similar to the `change` event of the native `<input type="range">` element, the `change` event will not fire when `value` is modified via JavaScript.

\* `Thumb` is a TypeScript enum exported by this component with types `START` and `END`

#### 

References

[MWC slider](https://www.npmjs.com/package/@material/mwc-slider)

[Covalent design system - Slider](https://teradata.github.io/covalent/docs/components/?path=/docs/components-slider--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In