ColorPallete = {

'green' : ['#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59', '#76FF03'],

'red'   : ['#F44336', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828','#B71C1C']

};

function getColorByPallet(color)
{
    var palletVector = ColorPallete[color];
    var max = palletVector.length;
    var randomIndex = Math.floor(Math.random()*(max+1));
    return palletVector[randomIndex];
}
