import { diff_match_patch } from 'diff-match-patch'


const dmp = new diff_match_patch()


export type Diffs = ReturnType<typeof getCodeDiffs>

export function getCodeDiffs({ initalCode, updatedCode }: { initalCode: string, updatedCode: string }) {

    const diffs = dmp.diff_main(initalCode, updatedCode)
    return diffs
}



export function getUpdatedCode({ diffs, initialCode }: { diffs: Diffs, initialCode: string }) {

    const patches = dmp.patch_make(initialCode, diffs)
    const [updatedCode, success] = dmp.patch_apply(patches, initialCode)
    console.log(success)
    return updatedCode

}
