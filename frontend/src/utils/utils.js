export const groupCalc = (fstTeam, secTeam, games, gr, teams, teamGame, opponentGame) => {
    games[fstTeam][secTeam] = opponentGame;
    games[secTeam][fstTeam] = teamGame;
    let teamsa = Object.keys(games[fstTeam])
    let totalTeam = {}

    Object.keys(games[fstTeam][teamsa[0]]).map((a) => {
       totalTeam[a] = games[fstTeam][teamsa[0]][a] + games[fstTeam][teamsa[1]][a] + games[fstTeam][teamsa[2]][a]
       return totalTeam[a]
    })
    totalTeam.team = fstTeam
    totalTeam.gr = gr

    let teamsh = Object.keys(games[secTeam])
    var totalOpponent = {}
    Object.keys(games[secTeam][teamsh[0]]).map((a) => {
        totalOpponent[a] = games[secTeam][teamsh[0]][a] + games[secTeam][teamsh[1]][a] + games[secTeam][teamsh[2]][a]
return totalOpponent[a]
    })
    totalOpponent.team = secTeam;
    totalOpponent.gr = gr;
    const opIndex = teams.findIndex(item => item.team === secTeam)
    const teamIndex = teams.findIndex(item => item.team === fstTeam)
    teams[opIndex] = totalOpponent;
    teams[teamIndex] = totalTeam;
    return;
}

export const groupSort = (teams, games) => {

    const sortedTeams = teams.sort((a, b) => {
        const ptsSort = b.pts - a.pts;
        const winsHeadToHead = games[b.team][a.team].w - games[a.team][b.team].w;
        const gdHeadToHead = games[b.team][a.team].gd - games[a.team][b.team].gd;
        const gsHeadToHead = games[b.team][a.team].gs - games[a.team][b.team].gs;
        const goalDifference = b.gd - a.gd;
        const goalScored = b.gs - a.gs;
        const wins = b.w - a.w;
        
        if (ptsSort !== 0) {
            return ptsSort
        }
        else if (winsHeadToHead !== 0) {
            return winsHeadToHead
        } else if (gdHeadToHead !== 0) {
            return gdHeadToHead
        } else if (gsHeadToHead !== 0) {
            return gsHeadToHead
        }
        else if (gsHeadToHead !== 0) {
            return goalDifference
        }
        else if (goalScored !== 0) {
            return goalScored
        }
        else if (wins !== 0) {
            return wins
        }
return null
    }

    )
    return sortedTeams

}
export const thirdPlaceSort = (teams) => {
    
    const sortedTeams = teams.sort((a, b) => {
        const ptsSort = b.pts - a.pts;
        const goalDifference = b.gd - a.gd;
        const goalScored = b.gs - a.gs;
        const wins = b.w - a.w;
       
        if (ptsSort !== 0) {
            return ptsSort
        }
        else if (goalDifference !== 0) {
            return goalDifference
        }
        else if (goalScored !== 0) {
            return goalScored
        }
        else if (wins !== 0) {
            return wins
        }
        return null
})

return sortedTeams.splice(0,4)
}

export const fillTrdPlace = (arr) => {
    var code = '';

    [...arr].forEach(el => {
        code += el.gr

    });

    return (thirdPlace[code])
}
export const allResultsDictionary = { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'r16', '7': 'qf', '8': 'sf', '9': 'final' }
export const knDic = {
    a: {
        0: { num: 38, side: 'home' },
        1: { num: 37, side: 'home' }


    },
    b: {
        0: { num: 40, side: 'home' },
        1: { num: 37, side: 'away' }

    },
    c: {
        0: { num: 39, side: 'home' },
        1: { num: 38, side: 'away' }

    },
    d: {
        0: { num: 43, side: 'home' },
        1: { num: 41, side: 'home' }

    },
    e: {
        0: { num: 44, side: 'home' },
        1: { num: 41, side: 'away' }

    },
    f: {
        0: { num: 42, side: 'home' },
        1: { num: 43, side: 'away' }

    },
    '37': { side: 'away', num: '46' },
    '38': { side: 'away', num: '47' },
    '39': { side: 'home', num: '46' },
    '40': { side: 'home', num: '47' },
    '41': { side: 'home', num: '45' },
    '42': { side: 'away', num: '45' },
    '43': { side: 'home', num: '48' },
    '44': { side: 'away', num: '48' },
    '45': { side: 'away', num: '49' },
    '46': { side: 'home', num: '49' },
    '47': { side: 'away', num: '50' },
    '48': { side: 'home', num: '50' },
    '49': { side: 'home', num: '51' },
    '50': { side: 'away', num: '51' },
}


const thirdPlace = {
    'abcd': [{ num: '39', gr: 'd' }, { num: '40', gr: 'a' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'abce': [{ num: '39', gr: 'e' }, { num: '40', gr: 'a' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'abcf': [{ num: '39', gr: 'f' }, { num: '40', gr: 'a' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'abde': [{ num: '39', gr: 'e' }, { num: '40', gr: 'd' }, { num: '44', gr: 'a' }, { num: '42', gr: 'b' }],
    'abdf': [{ num: '39', gr: 'f' }, { num: '40', gr: 'd' }, { num: '44', gr: 'a' }, { num: '42', gr: 'b' }],
    'abef': [{ num: '39', gr: 'f' }, { num: '40', gr: 'e' }, { num: '44', gr: 'b' }, { num: '42', gr: 'a' }],
    'acde': [{ num: '39', gr: 'd' }, { num: '40', gr: 'e' }, { num: '44', gr: 'c' }, { num: '42', gr: 'a' }],
    'acdf': [{ num: '39', gr: 'd' }, { num: '40', gr: 'f' }, { num: '44', gr: 'c' }, { num: '42', gr: 'a' }],
    'acef': [{ num: '39', gr: 'f' }, { num: '40', gr: 'e' }, { num: '44', gr: 'c' }, { num: '42', gr: 'a' }],
    'adef': [{ num: '39', gr: 'f' }, { num: '40', gr: 'e' }, { num: '44', gr: 'd' }, { num: '42', gr: 'a' }],
    'bcde': [{ num: '39', gr: 'd' }, { num: '40', gr: 'e' }, { num: '44', gr: 'b' }, { num: '42', gr: 'c' }],
    'bcdf': [{ num: '39', gr: 'd' }, { num: '40', gr: 'f' }, { num: '44', gr: 'c' }, { num: '42', gr: 'b' }],
    'bcef': [{ num: '39', gr: 'e' }, { num: '40', gr: 'f' }, { num: '44', gr: 'c' }, { num: '42', gr: 'b' }],
    'bdef': [{ num: '39', gr: 'e' }, { num: '40', gr: 'f' }, { num: '44', gr: 'd' }, { num: '42', gr: 'b' }],
    'cdef': [{ num: '39', gr: 'e' }, { num: '40', gr: 'f' }, { num: '44', gr: 'd' }, { num: '42', gr: 'c' }],
    // 'wxyz': [{ num: '39', gr: 'w' }, { num: '40', gr: 'x' }, { num: '44', gr: 'y' }, { num: '42', gr: 'z' }]

}
export const knoutPlaceHolder = {
r16 : [
    { home: '2A', away: '2B', num: '37'},
    { home: '1A', away: '2C', num: '38' },
    { home: '1C', away: '3D/E/F', num: '39'},
    { home: '1B', away: '3A/D/E/F', num: '40'},
    { home: '2D', away: '2E', num: '41'},
    { home: '1F', away: '3A/B/C', num: '42'},
    { home: '1D', away: '2F', num: '43' },
    { home: '1E', away: '3A/B/C/D', num: '44' },
],
qf : [

    { gh: null, ga: null, home: 'Winner Match 41', away: 'Winner Match 42', num: '45', np: 'sf', penalty: { ghP: null, gaP: null } },
    { gh: null, ga: null, home: 'Winner Match 39', away: 'Winner Match 37', num: '46', np: 'sf', penalty: { ghP: null, gaP: null } },
    { gh: null, ga: null, home: 'Winner Match 40', away: 'Winner Match 38', num: '47', np: 'sf', penalty: { ghP: null, gaP: null } },
    { gh: null, ga: null, home: 'Winner Match 43', away: 'Winner Match 44', num: '48', np: 'sf', penalty: { ghP: null, gaP: null } },
]
,
sf : [

    { gh: null, ga: null, home: 'Winner Match 46', away: 'Winner Match 45', num: '49', np: 'final', penalty: { ghP: null, gaP: null } },
    { gh: null, ga: null, home: 'Winner Match 48', away: 'Winner Match 47', num: '50', np: 'final', penalty: { ghP: null, gaP: null } }

],
final:[

    { gh: null, ga: null, home: 'Winner Match 49', away: 'Winner Match 50', num: '51', 'winner': '', penalty: { gh: null, ga: null } },


]

}