function display(map)
{
    html="<table>";
    for (y=0;y<map.height;y++)
    {
        html+="<tr>";
        for (x=0;x<map.width;x++)
        {
            html+="<td  class='";
            switch (map.data[y][x])
            {
                case "B":
                    html+="bandit";
                    break;                
                case "C":
                    html+="church";
                    break;                
                case "F":
                    html+="forest";
                    break;                    
                case "G":
                    html+="grass";
                    break;
                case "H":
                    html+="gold";
                    break;
                case "I":
                    html+="fort";
                    break;                                                                   
                case "J":
                    html+="lumberjack";
                    break;                    
                case "M":
                    html+="montain";
                    break;                    
                case "W":
                    html+="well";
                    break;                    
                case "R":
                    html+="rocks";
                    break;                
                case "T":
                    html+="tree";
                    break;
                case "U":
                    html+="trees";
                    break;
                case "X":
                    html+="water";
                    break;                                   
                default:                    
                    break;
            }
            switch (map.river[y][x])
            {                
                case "B":
                    html+="'><img src='../img/river_b.png";
                    break;
                case "BR":
                    html+="'><img src='../img/river_br.png";
                    break;
                case "BT":
                    html+="'><img src='../img/river_bt.png";
                    break;
                case "BTR":
                    html+="'><img src='../img/river_btr.png";
                    break;
                case "BTL":
                    html+="'><img src='../img/river_btl.png";
                    break;                                                                
                case "L":
                    html+="'><img src='../img/river_l.png";
                    break;                
                case "R":
                    html+="'><img src='../img/river_r.png";
                    break;
                case "T":
                    html+="'><img src='../img/river_t.png";
                    break;                       
                case "TL":
                    html+="'><img src='../img/river_tl.png";
                    break;    
                case "TR":
                    html+="'><img src='../img/river_tr.png";
                    break;    
                case "E":                    
                    break;                                                                
                default:                    
                    html+="'><img src='../img/box.png";
                    break;
            }                 
            html+="'></td>";
        }
        html+="</tr>";
    }
    html+="</table>";
    
    $('#map').html(html);
    
}