function category_a(horizontal, vertical) {
    console.log(`horizontal ${horizontal} vertical ${vertical}`)
    switch (horizontal) {
        case 2:
            if ([2, 3].includes(vertical)) return 2
            else if (vertical == 4) return 3
            else if (vertical == 5) return 4
            else if (vertical == 6) return 5
            else if (vertical == 7) return 6
            else if (vertical == 8) return 7            
        case 3:
            if (vertical == 3) return 2
            else if ([2, 4].includes(vertical)) return 3
            else if (vertical == 5) return 4
            else if (vertical == 6) return 5
            else if (vertical == 7) return 6
            else if (vertical == 8) return 7            
        case 4:
            if ([2, 3, 4].includes(vertical)) return 3
            else if (vertical == 5) return 4
            else if (vertical == 6) return 5
            else if (vertical == 7) return 6
            else if (vertical == 8) return 7            
        case 5:
            if ([2, 3, 4, 5].includes(vertical)) return 4
            else if (vertical == 6) return 5
            else if (vertical == 7) return 7
            else if (vertical == 8) return 8            
        case 6:
            if ([2, 3, 4, 5].includes(vertical)) return 5
            else if (vertical == 6) return 6
            else if (vertical == 7) return 7
            else if (vertical == 8) return 8           
        case 7:
            if ([2, 3, 4, 5].includes(vertical)) return 6
            else if (vertical == 6) return 7
            else if (vertical == 7) return 8
            else if (vertical == 8) return 9            
        case 8:
            if ([2, 3, 4, 5].includes(vertical)) return 7
            else if ([6, 7].includes(vertical)) return 8
            else if (vertical == 8) return 9            
        case 9:
            if ([2, 3, 4, 5].includes(vertical)) return 8
            else if ([6, 7, 8].includes(vertical)) return 9      
    }
}

function category_b(horizontal, vertical) {
    switch (horizontal) {
        case 0:
            if ([0, 1, 2].includes(vertical)) return 1
            else if (vertical == 3) return 2
            else if (vertical == 4) return 3
            else if (vertical == 5) return 4
            else if (vertical == 6) return 5            
        case 1:
            if ([0, 1].includes(vertical)) return 1
            else if ([2, 3].includes(vertical)) return 2
            else if (vertical == 4) return 3
            else if (vertical == 5) return 4
            else if (vertical == 6) return 5            
        case 2:
            if (vertical == 0) return 1
            else if ([1, 2].includes(vertical)) return 2
            else if (vertical == 3) return 3
            else if (vertical == 4) return 4
            else if (vertical == 5) return 5
            else if (vertical == 6) return 6            
        case 3:
            if ([0, 1].includes(vertical)) return 2
            else if ([2, 3].includes(vertical)) return 3
            else if (vertical == 4) return 4
            else if (vertical == 5) return 5
            else if (vertical == 6) return 7            
        case 4:
            if ([0, 1, 2].includes(vertical)) return 3
            else if (vertical == 3) return 4
            else if (vertical == 4) return 5
            else if (vertical == 5) return 6
            else if (vertical == 6) return 8            
        case 5:
            if ([0, 1, 2].includes(vertical)) return 4
            else if (vertical == 3) return 5
            else if (vertical == 4) return 6
            else if (vertical == 5) return 7
            else if (vertical == 6) return 8            
        case 6:
            if ([0, 1].includes(vertical)) return 5
            else if ([2, 3].includes(vertical)) return 6
            else if (vertical == 4) return 7
            else if (vertical == 5) return 8
            else if (vertical == 6) return 9            
        case 7:
            if ([0, 1].includes(vertical)) return 6
            else if (vertical == 2) return 7
            else if ([3, 4].includes(vertical)) return 8
            else if ([5, 6].includes(vertical)) return 9        

    }
}

function category_c(horizontal, vertical) {
    switch (horizontal) {
        case 0:
            if ([0, 1, 2].includes(vertical)) return 1
            else if (vertical == 3) return 2
            else if (vertical == 4) return 3
            else if (vertical == 5) return 4
            else if (vertical == 6) return 5
            else if (vertical == 7) return 6
        case 1:
            if ([0, 1].includes(vertical)) return 1
            else if (vertical == 2) return 2
            else if (vertical == 3) return 3
            else if (vertical == 4) return 4
            else if (vertical == 5) return 5
            else if (vertical == 6) return 6
            else if (vertical == 7) return 7
        case 2:
            if (vertical == 0) return 1
            else if ([1, 2].includes(vertical)) return 2
            else if (vertical == 3) return 3
            else if (vertical == 4) return 4
            else if (vertical == 5) return 5
            else if (vertical == 6) return 6
            else if (vertical == 7) return 7
        case 3:
            if (vertical == 0) return 2
            else if ([1, 2, 3].includes(vertical)) return 3
            else if (vertical == 4) return 5
            else if (vertical == 5) return 6
            else if (vertical == 6) return 7
            else if (vertical == 7) return 8
        case 4:
            if (vertical == 0) return 3
            else if ([1, 2].includes(vertical)) return 4
            else if ([3, 4].includes(vertical)) return 5
            else if (vertical == 5) return 6
            else if (vertical == 6) return 7
            else if (vertical == 7) return 8
        case 5:
            if (vertical == 0) return 4
            else if ([1, 2].includes(vertical)) return 5
            else if ([3, 4].includes(vertical)) return 6
            else if (vertical == 5) return 7
            else if (vertical == 6) return 8
            else if (vertical == 7) return 9
        case 6:
            if (vertical == 0) return 5
            else if ([1, 2].includes(vertical)) return 6
            else if ([3, 4].includes(vertical)) return 7
            else if ([5, 6].includes(vertical)) return 8
            else if (vertical == 7) return 9
        case 7:
            if (vertical == 0) return 6
            else if ([1, 2].includes(vertical)) return 7
            else if ([3, 4].includes(vertical)) return 8
            else if ([5, 6, 7].includes(vertical)) return 9
    }
}

function joinCB(group_c, group_b) {
    switch (group_c) {
        case 1:
            if (group_b == 1) return 1
            else if (group_b == 2) return 2
            else if (group_b == 3) return 3
            else if (group_b == 4) return 4
            else if (group_b == 5) return 5
            else if (group_b == 6) return 6
            else if (group_b == 7) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 2:
            if ([1, 2].includes(group_b)) return 2
            else if (group_b == 3) return 3
            else if (group_b == 4) return 4
            else if (group_b == 5) return 5
            else if (group_b == 6) return 6
            else if (group_b == 7) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 3:
            if ([1, 2, 3].includes(group_b)) return 3
            else if (group_b == 4) return 4
            else if (group_b == 5) return 5
            else if (group_b == 6) return 6
            else if (group_b == 7) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 4:
            if ([1, 2, 3, 4].includes(group_b)) return 4
            else if (group_b == 5) return 5
            else if (group_b == 6) return 6
            else if (group_b == 7) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 5:
            if ([1, 2, 3, 4, 5].includes(group_b)) return 5
            else if (group_b == 6) return 6
            else if (group_b == 7) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 6:
            if ([1, 2, 3, 4, 5, 6].includes(group_b)) return 6
            else if (group_b == 7) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 7:
            if ([1, 2, 3, 4, 5, 6, 7].includes(group_b)) return 7
            else if (group_b == 8) return 8
            else if (group_b == 9) return 9
        case 8:
            if ([1, 2, 3, 4, 5, 6, 7, 8].includes(group_b)) return 8
            else if (group_b == 9) return 9
        case 9:
            if (group_b != 0) return 9
    }
}

function findRosa(group_cb, group_a) {
    switch (group_cb) {
        case 1:
            if (group_a == 1) return 1
            else if (group_a == 2) return 2
            else if (group_a == 3) return 3
            else if (group_a == 4) return 4
            else if (group_a == 5) return 5
            else if (group_a == 6) return 6
            else if (group_a == 7) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 2:
            if ([1, 2].includes(group_a)) return 2
            else if (group_a == 3) return 3
            else if (group_a == 4) return 4
            else if (group_a == 5) return 5
            else if (group_a == 6) return 6
            else if (group_a == 7) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 3:
            if ([1, 2, 3].includes(group_a)) return 3
            else if (group_a == 4) return 4
            else if (group_a == 5) return 5
            else if (group_a == 6) return 6
            else if (group_a == 7) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 4:
            if ([1, 2, 3, 4].includes(group_a)) return 4
            else if (group_a == 5) return 5
            else if (group_a == 6) return 6
            else if (group_a == 7) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 5:
            if ([1, 2, 3, 4, 5].includes(group_a)) return 5
            else if (group_a == 6) return 6
            else if (group_a == 7) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 6:
            if ([1, 2, 3, 4, 5, 6].includes(group_a)) return 6
            else if (group_a == 7) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 7:
            if ([1, 2, 3, 4, 5, 6, 7].includes(group_a)) return 7
            else if (group_a == 8) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 8:
            if ([1, 2, 3, 4, 5, 6, 7, 8].includes(group_a)) return 8
            else if (group_a == 9) return 9
            else if (group_a == 10) return 10
        case 9:
            if ([1,2,3,4,5,6,7,8,9].includes(group_a)) return 9
            else if (group_a == 10) return 10
        case 10:
            if (group_a != 0) return 10
    }
}

export { category_a, category_b, category_c, joinCB , findRosa }